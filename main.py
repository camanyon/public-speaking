#import cors
from fastapi.middleware.cors import CORSMiddleware

from fastapi import FastAPI
#import collection form database.py
from database import collection
#need to import mongodb objects
from bson import ObjectId
print(f"Collection type: {type(collection)}")
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # For local development
        "https://public-speaking-mu.vercel.app"  # For production!
    ],
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, PUT, etc.)
    allow_headers=["*"],  # Allow all headers
)
#decorator to get when / is accessed retunr the message
@app.get("/")
def read_root():
    return {"Hello" : "World"}
#get at testdb return the amount of documents in collection
@app.get("/testdb")
async def test_database():
    result = await collection.count_documents({})
    return result
 #post function to add topics   
@app.post("/api/topics")
async def addtopic(topic: dict):
    result = await collection.insert_one(topic)
    return {"message": "Topic created!", "id": str(result.inserted_id)}
#get function to get a random topic
@app.get("/api/topics/random")
async def getrandom(category: str = None):
    # category is optional (defaults to None if not provided)If user visits /api/topics/random → category = None If user visits /api/topics/random?category=funny → category = "funny"
    if category:
        pipeline = [{"$match": {"category": category}}]  # Filter by category first
        {"$sample": {"size": 1}} #pick one form that category
    else: #if no category pick random
        pipeline = [{"$sample": {"size": 1}}] #special way to get random in mongodb takes all documents in collection and picks 1
    
    cursor = collection.aggregate(pipeline)
    topics = await cursor.to_list(length=1)

    if topics:
        topic = topics[0]
        # Convert ObjectId to string
        topic["_id"] = str(topic["_id"])
        return topic
    else:
        return {"error": "No topics found"}
    
@app.get("/api/topics")
async def getalltopics():
    cursor = collection.find()  # find() with no filter = get all
    topics = await cursor.to_list(length=100)  # Get up to 100  
    for topic in topics:
        topic["_id"] = str(topic["_id"])
    return topics

@app.put("/api/topics/{id}")
async def update_topic(id: str, updated_topic: dict):
    result = await collection.replace_one(
    {"_id": ObjectId(id)},  # Find by ID
    updated_topic  # Update with new data
)
    if result.matched_count > 0:
        return {"message": "Topic updated!"}
    else:
        return {"error": "Topic not found"}