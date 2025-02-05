import { FallingLines } from "react-loader-spinner";

const Loader = () => {
    return (
        <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FallingLines
                height="250"
                width="250"
                color="black"
                ariaLabel="falling-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
}

export default Loader;