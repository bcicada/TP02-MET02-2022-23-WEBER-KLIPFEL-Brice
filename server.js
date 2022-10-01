let express = require("express");
let app = express();

app.use(express.static(__dirname+'/dist/tp02_weberklipfel_brice'));

app.get('/*', (req, resp)=>{
    resp.sendFile(__dirname+'/dist/tp02_weberklipfel_brice/index.html');
});

app.listen(process.env.PORT || 8080);