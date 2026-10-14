import express from "express"

const app = express()

app.use(express.json())

app.get("/curso-docker", (req, res) => {
    res.json({message: "FullStack Developer - Arthur Amancio"})
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})