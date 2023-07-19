import { renderToStaticMarkup } from "react-dom/server"
import express from "express"

import Layout from "./pages/Layout.js"
import Home from "./pages/Home.js"
import About from "./pages/About.js"

import Button from "./components/Button.js"

const app = express()
const port = 8000

let count = 0


app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
    ${renderToStaticMarkup(
      <Layout title="Home">
        <Home count={count} />
      </Layout>
    )}`
  )
})

app.put("/", (req, res) => {
  count++
  res.send(renderToStaticMarkup(<Button count={count} />))
})


app.get("/about", (req, res) => {
  res.send(`<!DOCTYPE html>
    ${renderToStaticMarkup(
      <Layout title="About">
        <About />
      </Layout>
    )}`
  )
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})