document.getElementById('tempConverter').addEventListener('submit', function(event) {
    event.preventDefault();
    let temperature = parseFloat(document.getElementById('temperature').value);
    let unit = document.getElementById('unit').value;
    let result;
  
    if (unit === 'celsius') {
      result = (temperature * 9/5) + 32;
      document.getElementById('result').innerHTML = `${temperature}℃ sama dengan ${result}℉.`;
    } else {
      result = (temperature - 32) * 5/9;
      document.getElementById('result').innerHTML = `${temperature}℉ sama dengan ${result}℃.`;
    }
  });
  