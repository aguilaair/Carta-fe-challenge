import React, { } from 'react';


const Empty: React.FC = () => {


    return (
        <div className="py-20 px-10">
            <img
                alt="Logo"
                src="https://carta-beta.stanford.edu/static/media/carta_logo_dark.c3a96fec.png"
                style={{ filter: "hue-rotate(490deg)" }}
                width={250}
            />
            <h1 className="text-3xl text-left mt-8">
                Course exploration based on the choices of Stanford students
            </h1>
            <p className="text-l mt-4">
                Carta V2 is a student-run project. It is developed with the help of the <a href="https://pathwayslab.stanford.edu/" className="text-blue-500 hover:text-blue-600 hover:underline">Stanford Pathways Lab</a> (and hopefully me XD).
            </p>
        </div>
    );
}

export default Empty;