//GENERAL INFO ------> https://github.com/typicode/json-server
//RUN -------> json-server --watch app.js --port 3004
//API -------> http://localhost:3004/db ; http://localhost:3004/columnDefs

module.exports = () => {
  const data  = {
    "columnDefs": [
      { "headerName": "Id", "field": "id" },
      { "headerName": "Creation Date", "field": "creation_date" },
      { "headerName": "Update Date", "field": "update_date" },
      { "headerName": "Model Name", "field": "model_name" },
      { "headerName": "Description", "field": "description" },
      { "headerName": "Engine", "field": "engine" },
      { "headerName": "Domain Id", "field": "domain_id" },
      { "headerName": "User Id", "field": "user_id" },
      { "headerName": "Output Type", "field": "outputType" },
      { "headerName": "Category", "field": "category" },
      { "headerName": "Clustering Id", "field": "clustering_id" }
    ],
    "rowData": []
  }
  // Create 100 rows
  for (let i = 0; i < 100; i++) {
    data.rowData.push({ "id":i,
    "creation_date":new Date().toLocaleString(),
    "update_date":new Date().toLocaleString(),
    "model_name":"CreditCard",
    "description":"Credit Card Fraud Detection",
    "engine":"H2O",
    "domain_id":"9e4d2b7f-67ac-4208-904c-63cdc3d6eb9c",
    "user_id":"862fe20a-4ad5-4b61-a9b3-2db229978049",
    "outputType":"DOUBLE",
    "category":"AutoEncoder",
    "clustering_id":"NULL"})
  }
  return data
}


