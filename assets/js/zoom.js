// Initialize medium zoom.
$(document).ready(function () {
  var background = getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee"; // + 'ee' for trasparency.

  // Cap the zoom size of publication previews to a fixed max-width.
  // medium-zoom computes the available width as `width - left - right`, so we
  // supply symmetric left/right insets that leave exactly `maxZoomWidth` in the
  // middle (keeping the zoom centered). Recomputed on resize so it stays responsive.
  var maxZoomWidth = 800;
  var previewContainer = {};
  function updatePreviewContainer() {
    var vw = document.documentElement.clientWidth;
    var inset = Math.max((vw - maxZoomWidth) / 2, 0);
    previewContainer.width = vw;
    previewContainer.left = inset;
    previewContainer.right = inset;
  }
  updatePreviewContainer();
  window.addEventListener("resize", updatePreviewContainer);

  // Publication previews: zoom capped to a fixed max-width.
  mediumZoom(".preview[data-zoomable]", { background: background, container: previewContainer });

  // All other zoomable images: default full-size zoom.
  medium_zoom = mediumZoom("[data-zoomable]:not(.preview)", { background: background });
});
