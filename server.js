import express from "express"
import cors from "cors"
const port=5000;
const app=express();
app.use(cors())
const heroSectionData={
    headline:"Igniting the Spark of",
    highlight:"Innovation!",
    description:`A vibrant community where ideas become ventures. Gain mentorship,
        access resources, and find the support you need to turn passion into
        purpose.`,
    ctaLabel:"Join Us Now"
}
app.get('/api/hero-section', (req, res) => {
    res.json(heroSectionData);
  });
app.listen(port,()=>
{
    console.log(`The server is running on Port ${port}`);
})