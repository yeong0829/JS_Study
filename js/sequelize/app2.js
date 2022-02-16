const morgan = require('morgan');
const models = require('./models');

const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8080);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res, next) => {
    models.newMember.findAll()
    .then((members) => {
        res.send(members);
    }).catch((err) => {
        console.error(err);
        next(err)
    });
});
app.get('/new', (req, res) => {
    res.sendFile(__dirname+'../../html/QnA.html');
});

app.post('/new', (req, res) => {
    let body = req.body;

    models.newMember.create({
        name: body.name,
        id: body.id,
        email: body.email,
        phone: body.phone,
        reason: body.reason,
    }).then(result => {
        console.log('된것 같앙');
        res.redirect('/new');
    }).catch(err => {
        console.log(err);
    })
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행중')
});