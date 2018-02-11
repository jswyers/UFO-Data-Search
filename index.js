// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $stateInput = document.querySelector("#state");
var $dateInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredAddresses to addressData initially
var filteredSitings = dataSet;


// Clear the input fields
$stateInput.value = "";
$dateInput.value = "";
$cityInput.value = "";
$countryInput.value = "";
$shapeInput.value = "";

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredSitings.length; i++) {
    // Get get the current address object and its fields
    var siting = filteredSitings[i];
    var fields = Object.keys(siting);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = siting[field];
    }
  }
}
function handleSearchButtonClick() {

  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterState = $stateInput.value.trim().toLowerCase();
  var filterDate = $dateInput.value.trim().toLowerCase();
  var filterCity = $cityInput.value.trim().toLowerCase();
  var filterCountry = $countryInput.value.trim().toLowerCase();
  var filterShape = $shapeInput.value.trim().toLowerCase();
  
  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  if (filterState != '') {
    filteredSitings = dataSet.filter(function(siting) {
      var sitingState = siting.state.toLowerCase();
      return sitingState === filterState;      
      }      
    )}
 
  if (filterDate != '') {
        filteredSitings = filteredSitings.filter(function(siting) { 
          var sitingDate = siting.datetime.toLowerCase();
          return sitingDate === filterDate;
      }  
    )}


  if (filterCity != '') {
    filteredSitings = filteredSitings.filter(function(siting) { 
      var sitingCity = siting.city.toLowerCase();
      return sitingCity === filterCity;
        }
      )} 
  if (filterCountry != '') {
      filteredSitings = filteredSitings.filter(function(siting) { 
        var sitingCountry = siting.country.toLowerCase();
        return sitingCountry === filterCountry;
            }
          )}
  if (filterShape != '') {
      filteredSitings = filteredSitings.filter(function(siting) { 
        var sitingShape = siting.shape.toLowerCase();
        return sitingShape === filterShape;    
              }
            )}
   
  renderTable();         
   
}         
   
   
// Render the table for the first time on page load
renderTable();