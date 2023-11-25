

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center mx-auto my-5 pt-5">
            <p className="text-pink-600 text-xl mb-2">{subHeading}</p>

            <h2 className="text-4xl font-bold border-pink-600 border-b-2 p-2 md:w-4/12 mx-auto"> {heading}</h2>

        </div>
    );
};

export default SectionTitle;