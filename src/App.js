 
      import React, { useState } from "react";
      import "./App.css";
      
      const App = () => {
        //concept of call api using useeffect hook there other method are also avalibale
        //   const [data,setData]=useState([]);
        //    useEffect(()=>{
        //     fetch("https://dummy.restapiexample.com/api/v1/employees").then((result)=>{
        //       result.json().then((rep)=>{
      
        //         setData(rep);
        //       })
        //       });
        //    },[])
        //     console.log(data);
      
        const [searchId, setSearchId] = useState("");
        const [searchedEmployee, setSearchedEmployee] = useState(null);
        const [employees, setEmployees] = useState([
          {
            "id": 1,
            "employee_name": "Tiger Nixon",
            "employee_salary": 320800,
            "employee_age": 61,
            "profile_image": "https://hub.dummyapis.com/Image?text=DF&height=120&width=120",
          },
          {
            "id": 2,
            "employee_name": "Garrett Winters",
            "employee_salary": 170750,
            "employee_age": 63,
            "profile_image":"https://hub.dummyapis.com/Image?text=JK&height=120&width=120",
          },
          {
            "id": 3,
            "employee_name": "Ashton Cox",
            "employee_salary": 86000,
            "employee_age": 66,
            "profile_image": "https://hub.dummyapis.com/Image?text=NL&height=120&width=120",
          },
          {
            "id": 4,
            "employee_name": "Cedric Kelly",
            "employee_salary": 433060,
            "employee_age": 22,
            "profile_image": "https://hub.dummyapis.com/Image?text=TK&height=120&width=120",
          },
          {
            "id": 5,
            "employee_name": "Airi Satou",
            "employee_salary": 162700,
            "employee_age": 33,
            "profile_image": "https://hub.dummyapis.com/Image?text=SG&height=120&width=120",
          },
          {
            "id": 6,
            "employee_name": "Brielle Williamson",
            "employee_salary": 372000,
            "employee_age": 61,
            "profile_image":"https://hub.dummyapis.com/Image?text=AE&height=120&width=120",
          },
          {
            "id": 7,
            "employee_name": "Herrod Chandler",
            "employee_salary": 137500,
            "employee_age": 59,
            "profile_image": "https://hub.dummyapis.com/Image?text=AS&height=120&width=120",
          },
          {
            "id": 8,
            "employee_name": "Rhona Davidson",
            "employee_salary": 327900,
            "employee_age": 55,
            "profile_image": "https://hub.dummyapis.com/Image?text=BJ&height=120&width=120",
          },
          {
            "id": 9,
            "employee_name": "Colleen Hurst",
            "employee_salary": 205500,
            "employee_age": 39,
            "profile_image": "https://hub.dummyapis.com/Image?text=LS&height=120&width=120",
          },
          {
            "id": 10,
            "employee_name": "Sonya Frost",
            "employee_salary": 103600,
            "employee_age": 23,
            "profile_image": "https://hub.dummyapis.com/Image?text=LS&height=120&width=120",
          }
        ]);
      
        const handleSearch = () => {
          const employee = employees.find(
            (employee) => employee.id === parseInt(searchId)
          );
          setSearchedEmployee(employee);
        };
      
        const handleDelete = (id) => {
          const updatedEmployees = employees.filter((employee) => employee.id !== id);
          setEmployees(updatedEmployees);
        };
      
        const handleEdit = (id) => {
          // Handle edit functionality here
          console.log(`Edit employee with ID: ${id}`);
        };
      
        return (
          <div>
            <div className="search-container">
              <h2>Employee dashbord</h2>
              <input
                type="text"
                placeholder="Enter employee ID"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
            <div className="card-list">
              {employees.map((employee) => (
                <div key={employee.id} className="card">
                  <h2>
                    {employee.employee_name} 
                  </h2>
                  <p>ID: {employee.id}</p>
                   
                   
                  <p>Age: {employee.employee_age}</p>
                   
                  <p>Salary: ${employee.employee_salary}</p>
                   
                  <img src={employee.profile_image} alt={employee.employee_name} />
                  <div className="button-container">
                    <button onClick={() => handleDelete(employee.id)}>Delete</button>
                    <button onClick={() => handleEdit(employee.id)}>Edit</button>
                  </div>
                </div>
              ))}
            </div>
      
            {searchedEmployee && (
              <div className="employee-details">
                <h2>Searching History</h2>
                <hr />
                <div className="card">
                  <h2>
                    {searchedEmployee.employee_name}  
                  </h2>
                  <p>ID: {searchedEmployee.id}</p>
                  
              
                  <p>Age: {searchedEmployee.employee_age}</p>
                   
                  <p>Salary: ${searchedEmployee.salary}</p>
                   
                  <img
                    src={searchedEmployee.profile_image}
                    alt={searchedEmployee.employee_name}
                  />
                </div>
              </div>
            )}
          </div>
        );
      };
      
      export default App;
      
       
      
       
      
