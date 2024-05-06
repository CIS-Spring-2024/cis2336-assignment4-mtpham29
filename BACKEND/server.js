// counting order form totals//
const express = require('express');
const bodyparse = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000

app.use(bodyparse.json());
app.use(bodyparse.urlencoded({ extended: true }));

app.post('/processorder', (req, res) => {
    const{name, phone, item1, item1quantity, item2, item2quantity, item3, item3quantity} = req.body;
    if (!name || !phone || !item1 || !item1quantity || !item2 || !item2quantity || !item3 || !item3quantity) {
        return res.status(404).send('Please fill in the information.');
}
    const item1Total = parseFloat(item1) * parseInt(item1quantity);
    const item2Total = parseFloat(item2) * parseInt(item2quantity);
    const item3Total = parseFloat(item3) * parseInt(item3quantity);
    const total = item1Total + item2Total + item3Total;
    res.send(`Total amount: $${total}`);
});
app.use(express.static('public'));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//attempting to create a map with api//
let map;

async function initMap() {
  const position = { lat: 29.619678, lng: -95.634949 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "MAPid",
  });


  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "UH",
  });
}

initMap();
