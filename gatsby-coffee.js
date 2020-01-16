const express = require("express")
const gatsyExpress = require("gatsby-plugin-express")
const app = express()

// serve static files before gatsbyExpress
app.use(express.static("public/"))
app.use(
  gatsyExpress("config/gatsby-express.json", {
    publicDir: "public/",
    template: "public/404/index.html",

    // redirects all /path/ to /path
    // should be used with gatsby-plugin-remove-trailing-slashes
    redirectSlashes: true,
  })
)

app.listen(3333, () => {
  console.log("Listening on port 3333")
})
