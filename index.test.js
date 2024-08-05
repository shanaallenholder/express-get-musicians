// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');


const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");
const { Json } = require('sequelize/lib/utils');


describe('./musicians endpoint', () => {
    // Write your tests here
    it(" Testing musicians endpoint" , async () => {
        const response = await request(app). get("/musicians");
        expect(response.statusCode).toBe(200);
     
      
     });

     it("Testing musicians data in the database", async () => {
         const response = await request(app). get("/musicians");
         const responseData = JSON.parse(response.text);
         expect(responseData[0].name).toBe('Mick Jagger');
         expect(responseData[0].instrument).toBe('Voice');

        })
  })
    
        describe('./Bands endpoint', () => {
    it(" Testing Bands endpoint" , async () => {
            const response = await request(app). get("/bands");
            expect(response.statusCode).toBe(200);
             
              
    })
        
    it("Testing Bands data in the database", async () => {
            const response = await request(app). get("/bands");
            const responseData = JSON.parse(response.text);
            expect(responseData[1].name).toBe('Black Pink');
            expect(responseData[1].genre).toBe('Pop');
     });

 })