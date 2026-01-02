Example of 404 catch-all (without TypeScript)

app.use((req, res)=>{
  res.status(404).json({message: "Endpoint not found"})
})