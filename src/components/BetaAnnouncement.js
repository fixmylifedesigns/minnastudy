const BetaAnnouncement = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 py-4 px-4 sm:px-6 lg:px-8 mb-12">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="inline-block bg-white text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                BETA TESTERS WANTED
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Help Shape Our AI Translation App
              </h3>
              <p className="text-white/90">
                Join our beta program for early access to cutting-edge
                translation features. Free credits for all testers!
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="/translate/application"
                className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetaAnnouncement;
