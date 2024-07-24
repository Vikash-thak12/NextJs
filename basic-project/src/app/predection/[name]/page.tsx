
const getPredictedAge = async (name: string) => {
    const res = await fetch(`https://api.agify.io?name=${name}`);
    return res.json();
};

const getPredictedGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io?name=${name}`);
    return res.json();
};

const getPredictedNationality = async (name: string) => {
    const res = await fetch(`https://api.nationalize.io?name=${name}`);
    return res.json();
};
interface Params {
    params: { name: string }
}

export default async function Name({ params }: Params) {
    const ageData = getPredictedAge(params.name)
    const genderData = getPredictedGender(params.name)
    const countryData = getPredictedNationality(params.name)

    const [age, gender, country] = await Promise.all([
        ageData, genderData, countryData
    ])
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="bg-gray-500 px-4 py-2 rounded-2xl text-3xl">
                <h1 className="mb-5">Personal Information of {params.name.toUpperCase()}</h1>
                <div>
                    <h2>Age: {age.age}</h2>
                    <h2>Gender: {gender.gender}</h2>
                    <h2>Country: {country.country[0].country_id}</h2>
                    {/* <button className="text-white px-4 py-2 rounded-lg bg-red-500 hover:bg-red-800 transition mt-5">Click to Return back Home</button> */}
                </div>
            </div>
        </div>
    )
}