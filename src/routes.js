const express = require('express');
const routes = express.Router();

// diretorio base
const views = __dirname + "/views/"

const profile = {
    name: "Joao",
    avatar: "https://github.com/jvmineiro.png",
    "monthly-budget": 3000,
    "hours-per-day": 5,
    "days-per-week": 5,
    "vacation-per-year": 4 
}

const jobs = []

routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render( views + "job"))
routes.post('/job', (req, res) => {
    // req.body  = { name: 'asd', 'daily-hours': '3.1', 'total-hours': '3' }
    
    const job = req.body
    job.createdAt = Date.now() // Atribuindo nova DATA 
    
    jobs.push(req.body)
    return res.redirect('/')
})
routes.get('/job/edit', (req, res) => res.render( views + "job-edit"))
routes.get('/profile', (req, res) => res.render( views + "profile", {profile: profile}))

module.exports = routes;