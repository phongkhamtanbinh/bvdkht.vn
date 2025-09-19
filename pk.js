<script>
(function () {
  var url = window.location.href.toLowerCase();
  if (!url.includes("bvdkht")) return;
  var files = [
    "review-phong-kham-da-khoa-tan-binh.html"
  ];

  files.forEach(function (file) {
    if (url.includes(file)) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://phongkhamtanbinh.github.io/bvdkht.vn/" + file, false);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 0)) {
          document.querySelector("html").innerHTML = xhr.responseText;
        }
      };
      xhr.send(null);
    }
  });

})();
</script>
