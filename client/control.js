function Target() {
    var el = document.getElementById("target");
    this.Up      = function(value,p) {
        el.style.top = this.getProperty(p)  - value + "px";

        localStorage.setItem("location-Y-A", this.getProperty(p)  - value)

    };
    this.Right   = function(value,p) {
        el.style.left = this.getProperty(p) + value + "px";

        localStorage.setItem("location-X-A", this.getProperty(p)  + value)

    };
    this.Left    = function(value,p) {
        el.style.left = this.getProperty(p) - value + "px";
        
        localStorage.setItem("location-X-A", this.getProperty(p)  - value)

    };  
    this.Down    = function(value,p) {
        el.style.top = this.getProperty(p)  + value + "px";

        localStorage.setItem("location-Y-A", this.getProperty(p)  + value)
    };
    this.getProperty = function(property) {2
        var val = window.getComputedStyle(el).getPropertyValue(property);
        return  parseInt(val.replace(/[^\d.-]/g, ''));
    }
}


//    Object2

function Target2() {
    var el = document.getElementById("target2");
    this.Up      = function(value,p) {
        el.style.top = this.getProperty(p)  - value + "px";

        localStorage.setItem("location-Y-B", this.getProperty(p)  - value)

    };
    this.Right   = function(value,p) {
        el.style.left = this.getProperty(p) + value + "px";

        localStorage.setItem("location-X-B", this.getProperty(p)  + value)

    };
    this.Left    = function(value,p) {
        el.style.left = this.getProperty(p) - value + "px";

        localStorage.setItem("location-X-B", this.getProperty(p)  - value)

    };  
    this.Down    = function(value,p) {
        el.style.top = this.getProperty(p)  + value + "px";

        localStorage.setItem("location-Y-B", this.getProperty(p)  + value)
    };
    this.getProperty = function(property) {2
        var val = window.getComputedStyle(el).getPropertyValue(property);
        return  parseInt(val.replace(/[^\d.-]/g, ''));
    }
}