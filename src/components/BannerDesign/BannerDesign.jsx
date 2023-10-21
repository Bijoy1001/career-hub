const BannerDesign = () => {
    return (
        <div className="bg-blue-950">
            <div className="flex gap-6 pl-4">
                <div>
                    <h1 className="font-bold text-6xl text-white mt-10">One Step <br />
                         Closer To Your <br />
                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF] "> Dream Job</span></h1>
                         <p className="mt-8 mb-8">Explore thousands of job opportunities with all the <br />
                          information you need. Its your future. Come find it. Manage all <br />
                           your job application from start to finish.</p>
                        <button className="btn btn-primary">Get Started</button>
                </div>
                <div>
                    <img src="/src/assets/images/user.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default BannerDesign;