function updatemap() {
fetch("http://127.0.0.1:5500/Corona%20website/update.json")
.then(response => response.json())
.then(rsp => {
    console.log(rsp);
    rsp.data.forEach(element => {
        latitude = element.latitude;
        longitude = element.longitude;
        
        cases = element.infected;
        if (cases>300)
        {
            color= "red";
        }

        else if(cases>150)
        {
          color="yellow";
        }

        else{
            color="blue";
        }
   

        // marker
        var marker = new mapboxgl.Marker({
            draggable: false,
            color: color
            })
            .setLngLat([longitude, latitude])
            .addTo(map);

        
    });
})
    
}
updatemap();
