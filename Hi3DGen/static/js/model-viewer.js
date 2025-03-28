// This code is used to add additional functionality to the ours model-viewers.
document.querySelectorAll('model-viewer.model-viewer-texture').forEach(
    function(modelViewer) {
        // Switches between textured and untextured mode
        modelViewer.setTextured = function(isTextured) { 
            modelViewer.model.materials[0].pbrMetallicRoughness.setMetallicFactor(0.1);
            modelViewer.model.materials[0].pbrMetallicRoughness.setRoughnessFactor(0.9);
            modelViewer.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([0.4, 0.4, 0.4]);
            modelViewer.model.materials[0].pbrMetallicRoughness.baseColorTexture.setTexture(null);
        };

        // Reset view
        modelViewer.resetView = function () {
            modelViewer.cameraTarget = '0m 0m 0m';
            modelViewer.fieldOfView = '45deg';
            modelViewer.cameraOrbit = '0deg 90deg 2m';
            modelViewer.resetTurntableRotation(0);
            modelViewer.jumpCameraToGoal();
        }

        modelViewer.addEventListener('load', async function() {
            modelViewer.currentTexture = await modelViewer.createTexture(modelViewer.texturePath);
            modelViewer.setTextured();
        });
    }
);

