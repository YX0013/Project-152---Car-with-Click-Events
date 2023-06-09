AFRAME.registerComponent("car", {
    schema: {
        scale: {type: 'number', default: 1},
        rotation: {type: 'number', default: 1}
    },
    tick: function () {
        this.data.rotation= this.data.rotation + 0.1;
        this.el.setAttribute("rotation", {x: 0, y: this.data.rotation, z: 0});
        this.el.setAttribute("gltf-model", "#car");
        this.el.setAttribute("scale", {x: this.data.scale, y: this.data.scale, z: this.data.scale});
    }
  });