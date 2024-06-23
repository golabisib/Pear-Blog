import { FidgetSpinner } from "react-loader-spinner"


function Loader() {
  return (
    <div style={{
        width: "100%",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px"
    }}>
        <FidgetSpinner
        visible={true}
        height="100"
        width="100"
        backgroundColor="#378ba4"
        ballColors={["#81bece","#036280","#e8ede7"]}
        />
    </div>
  )
}

export default Loader
