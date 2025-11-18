#enable async its the async MongoDB client
from motor.motor_asyncio import AsyncIOMotorClient
#gives operating system funtionality since environment variables are stored at the os level
import os
#python doesnt read .env files automatically need this for reading it
from dotenv import load_dotenv
#loads the file
load_dotenv()
#getting the connection string from environment and naming it MONGO_URL
MONGO_URL = os.getenv("MONGO_URL")
#creating a connection to my database and pass in the connection string
client = AsyncIOMotorClient(MONGO_URL)
#creates a database called publicspeaking like a sql table
database = client.PUCLICSPEAKING
#creates a section called topics like a sql row
collection = database.topics






