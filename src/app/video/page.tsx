const Header: React.FC = () => {
    return (
      <header className="flex justify-between items-center py-4 px-6 bg-indigo-600 text-white">
        <div className="text-2xl font-bold">LMS Platform</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Courses</a></li>
            <li><a href="#" className="hover:underline">My Profile</a></li>
            <li><a href="#" className="hover:underline">Logout</a></li>
          </ul>
        </nav>
      </header>
    );
};
  
const VideoPlayer: React.FC = () => {
    return (
      <div className="relative w-full h-0 pb-[56.25%]">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Course Video"
          allowFullScreen
        />
      </div>
    );
};
  
const VideoPlaylist: React.FC = () => {
    const videos = [
      { title: "Introduction", duration: "10:05" },
      { title: "Lesson 1: Basics", duration: "15:20" },
      { title: "Lesson 2: Advanced", duration: "20:15" },
      // Add more videos here...
    ];
  
    return (
      <aside className="bg-gray-100 p-4 space-y-4">
        <h3 className="text-lg font-semibold mb-4">Video Playlist</h3>
        <ul className="space-y-2">
          {videos.map((video, index) => (
            <li
              key={index}
              className="p-3 bg-white rounded-lg shadow hover:bg-gray-200 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <span>{video.title}</span>
                <span className="text-sm text-gray-600">{video.duration}</span>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    );
  };
  


  const CourseInfo: React.FC = () => {
    return (
      <section className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Course Title</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget consequat orci.
        </p>
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Instructor"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <p className="font-bold">Instructor Name</p>
            <p className="text-gray-500">Instructor Title</p>
          </div>
        </div>
      </section>
    );
};
  
const CommentsSection: React.FC = () => {
    const comments = [
      { user: "John Doe", comment: "Great lesson!" },
      { user: "Jane Smith", comment: "Very informative, thanks!" },
      // Add more comments here...
    ];
  
    return (
      <section className="bg-gray-100 p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Comments</h3>
        <ul className="space-y-4">
          {comments.map((comment, index) => (
            <li key={index} className="p-4 bg-white rounded-lg shadow">
              <p className="font-bold">{comment.user}</p>
              <p className="text-gray-700">{comment.comment}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  


  const RelatedResources: React.FC = () => {
    const resources = [
      { title: "Lecture Notes", link: "#" },
      { title: "Quiz 1", link: "#" },
      // Add more resources here...
    ];
  
    return (
      <section className="bg-white p-6 shadow rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Related Resources</h3>
        <ul className="space-y-2">
          {resources.map((resource, index) => (
            <li key={index}>
              <a href={resource.link} className="text-indigo-600 hover:underline">
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  

  const page: React.FC = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* <Header /> */}
        <main className="flex flex-col md:flex-row max-w-6xl mx-auto p-6 space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-1 space-y-6">
            <VideoPlayer />
            <CourseInfo />
            <CommentsSection />
          </div>
          <div className="w-full md:w-1/3 space-y-6">
            <VideoPlaylist />
            <RelatedResources />
          </div>
        </main>
      </div>
    );
  };
  
  export default page;
  
  