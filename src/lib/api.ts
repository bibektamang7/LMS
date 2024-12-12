const baseApi = process.env.NEXT_PUBLIC_BASE_API;
const fetchCourse = async (courseId: string) => {
  const response = await fetch(`${baseApi}/courses/get-course?courseId=${courseId}`, {
    cache: "no-store",
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch coures");
  }
  return response.json();
}
const fetchInitialCourses = async ({page = 1, limit = 6, category = "", level = ""}) => {
  const res = await fetch(`${baseApi}/courses/get-courses?page=${page}&limit=${limit}&category=${category}&level=${level}`, {
    method: "GET",
    cache: 'no-store'
  })
  if (!res.ok) {
    throw new Error("Failed to fetch Courses");
  }
  return res.json();
}

const fetchInstructors = async () => {
  const response = await fetch(`${baseApi}/users/get-instructors`, {
    cache: "no-store"
  });
  if (!response.ok) {
    throw new Error("Failed to fetch instructors");
  }
  return response.json();
};

const fetchEnrolledCourses = async (token: string) => {
  const res = await fetch(`${baseApi}/courses/enrolled-courses`, {
    method: "GET",
    cache: "no-store",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch enrolled courses");
  }
  return res.json();
}


const deleteUser = async (userId: string) => {
  try {
    const res = await fetch(`${baseApi}/users/delete-user`, {
      method: "DELETE",
      body: JSON.stringify({ userId })
    });
    if (!res.ok) {
      throw new Error("Failed to delete user");
    }
    return res.json();
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

const fetchCurrentCourseVideo = async (courseId: string) => {
  try {
      const res = await fetch(`${baseApi}/courses/videos?courseId=${courseId}`, {
        "cache": "no-store"
    });

    if (!res.ok) {
      throw new Error("Failed to fetch course videos");
    }

    return res.json();
  } catch (error) {
    throw new Error("Something went wrong!");
  }
}


const fetchUsers = async (limit: number, page: number) => {
    try {
        const res = await fetch(`${baseApi}/users/get-users?limit=${limit}&page=${page}`, {
            "cache": "no-store",
        })
        if (!res.ok) {
            throw new Error("Failed to fetch users");
        }
        return res.json();
    } catch (error) {
        throw new Error("Something went wrong");
    }
}
const deleteCourse = async (courseId: string) => {
  try {
    const res = await fetch(`${baseApi}/courses/delete-course`, {
      method: "DELETE",
      body: JSON.stringify({courseId})
    })
    if (!res.ok) {
      throw new Error("Failed to delete course");
    }
    return res.json();
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

const fetchDashboardInfo = async () => {
  try {
    const res = await fetch(`${baseApi}/dashboard/get-dashboard-data`, {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch dashboard data");
    }

    return res.json();
  } catch (error) {
    throw new Error("Somethin went wrong");
  }
}
const makePayment = async ({courseId, userId, courseAmount}: {courseId: string, userId: string, courseAmount: number}) => {
  try {
    const res = await fetch(`${baseApi}/payment/khalti`, {
      method: "POST",
      body: JSON.stringify({
        courseId,
        userId,
        courseAmount
      })
    });
    if (!res.ok) {
      throw new Error("Failed to make payment");
    }
    return res.json();
  } catch (error) {
    throw new Error("Something went wrong")
  }
}

export {
  makePayment,
  fetchDashboardInfo,
    fetchUsers,
    deleteCourse,
    fetchCourse,
    fetchInitialCourses,
    fetchInstructors,
    fetchEnrolledCourses,
    deleteUser,
    fetchCurrentCourseVideo
}