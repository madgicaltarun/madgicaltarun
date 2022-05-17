import { axios } from "axios";

axios.get("localhost:3000/data").then(res=>{
    console.log(res)
})