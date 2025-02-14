any<!DOCTYPE ;html>
<html>
<body> 

<p id="text">Hello, world!</p>
<button onclick="changeText()">Click me</button>

<script>
  function changeText() {
    document.getElementById("text").innerHTML = "You clicked the button!"
  }
</script>

</body>
</html>