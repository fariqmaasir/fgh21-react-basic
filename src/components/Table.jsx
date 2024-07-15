import React from "react";

function Table() {
    const [data, setData] = React.useState([
        {
            id: 712,
            name: "fariq",
            age: 20,
            gender: "Laki-laki",
            isSmoker: true,
            smokeData: ["Marlboro","Esse"],
        }
    ]) 
    
    function addData(event) {
        event.preventDefault()
        const name = event.target.name.value
        const age = event.target.age.value
        const gender = event.target.gender.value
        let isSmoker = event.target.isSmoker.value
        const smoke = event.target.smoke
        let smokeData = [];
        for (let i = 0; i < smoke.length; i++) {
            if (smoke[i].checked) {
            smokeData.push(smoke[i].value);
            }
        }
        if(isSmoker === "Ya"){
            isSmoker = true
        }else{
            isSmoker = false
        }
        const newData = [...data, {
            id: Math.random() * 9999,
            name,
            age,
            gender,
            isSmoker,
            smokeData
        }]
        setData(newData)
        console.log(data)
    }
    return(
    <div className="survey">
        <form onSubmit={addData}>
            <label htmlFor="name">Siapa nama anda</label>
            <input type="text" name="name" id="name" />

            <label htmlFor="age">Berapa umur anda</label>
            <input type="number" name="age" id="age" />
            <div>
                <legend>Apa jenis kelamin anda?</legend>
                <input type="radio" name="gender" id="genderMale" value="Laki-laki"/>
                <label htmlFor="genderMale">Laki-laki</label>
                <input type="radio" name="gender" id="genderFemale" value="Perempuan"/>
                <label htmlFor="genderFemale">Perempuan</label>
            </div>
            <div>
                <legend>Apakah anda seorang perokok?</legend>
                <input type="radio" name="isSmoker" id="isSmokerYes" value="Ya"/>
                <label htmlFor="isSmokerYes">Ya</label>
                <input type="radio" name="isSmoker" id="isSmokerNo" value="Tidak"/>
                <label htmlFor="isSmokerNo">Tidak</label>
            </div>
            <div>
                <legend>Jika anda perokok, rokok apa yang anda pernah coba?</legend>
                <input type="checkbox" name="smoke" id="smoke1" value="Gudang Garam Filter"/>
                <label htmlFor="smoke1">Gudang Garam Filter</label>
                <input type="checkbox" name="smoke" id="smoke2" value="Lucky Strike"/>
                <label htmlFor="smoke2">Lucky Strike</label>
                <input type="checkbox" name="smoke" id="smoke3" value="Marlboro"/>
                <label htmlFor="smoke3">Marlboro</label>
                <input type="checkbox" name="smoke" id="smoke4" value="Esse"/>
                <label htmlFor="smoke4">Esse</label>
            </div>
            <div>
                <button type="submit">Submit Data</button>
            </div>
        </form>
        <table>
        <thead>
            <tr>
                <th>Nama</th>
                <th>Umur</th>
                <th>Gender</th>
                <th>Perokok</th>
                <th>Jenis Rokok</th>
            </tr>
        </thead>
        <tbody>
        {data.map(item =>{ 
        return(
        <tr key={`survey-${item.id}`}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.gender}</td>
            <td>{item.isSmoker ? "Ya":"Tidak"}</td>
            <td>{item.smokeData}</td>
        </tr>
        )
        })}
        </tbody>
        </table>
    </div>
    )
}

export default Table