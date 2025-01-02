import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResults/SearchResult";


export const BASE_URL = "http://localhost:9000"


const App = () => {


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedBtn,setSelectedBtn] = useState("all");



  // fetchFoodData(); mulitple rendering problem ara hai, isliye useEffect use karna padega
  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL)
        const json = await response.json()
        setData(json);
        setFilteredData(json);
        setLoading(false);
      }
      catch (error) {
        setError("unable to fetch data");
      }

    }
    fetchFoodData();
  }, [])

  const searchFood = (e) =>{
    const searchValue = e.target.value;
    console.log(searchValue);
    if(searchValue === "")
      setFilteredData(null);
    
    const filter = data?.filter((food) => (
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    ))

    setFilteredData(filter);
  }

  const filterFood = (type) => {
    if(type === "all"){
      setFilteredData(data);
      setSelectedBtn("all");
    }

      const filter = data?.filter((food) => (
        food.type.toLowerCase().includes(type.toLowerCase())
      ))
      setFilteredData(filter);
      setSelectedBtn(type);
      
    }
  }

  if (error) return <div>{error}</div>;

  if (loading) return <div>Loading...</div>;

  return (
    <>
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/logo.svg" alt="" />
        </div>
        <div className="search">
          <input
            onChange={searchFood}
            placeholder="Search Food" />
        </div>
      </TopContainer>
      <FilterContainer>
        <Button onClick = {filterFood("All")}>All</Button>
        <Button onClick = {filterFood("Breakfast")}>Breakfast</Button>
        <Button onClick = {filterFood("Lunch")}>Lunch</Button>
        <Button onClick = {filterFood("Dinner")}>Dinner</Button>
      </FilterContainer>
    </Container>
    <SearchResult data={filteredData}></SearchResult>
    </>
  );
};

export default App;



const FilterContainer = styled.section`
  display:flex;
  justify-content:center;
  gap:12px;
  color:white;
  padding: 40px;
`;

export const Button = styled.button`
  background-color: #ff4343;
  border-radius:5px;
  padding:6px 12px;
  border:none;
  cursor:pointer;
  &:hover{
    background-color:#f22f2f;
  }
`;

export const Container = styled.div`
  max-width:1200px;
  margin: 0 auto;
  background-color: #323334;
`;
const TopContainer = styled.section`
  min-height:140px;
  display:flex;
  justify-content:space-between;
  padding:16px;
  align-items:center;

.search{
    input{
    background-color:transparent;
    border: 1px solid red;
    color:white;
    border-radius:5px;
    height: 40px;
    font-size:16px;
    padding: 0 10px;
    }
  }
`;
