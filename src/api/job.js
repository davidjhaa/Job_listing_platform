import axios from "axios";
const backendUrl = `http://localhost:3001/api/v1/job`;

export const createJobPost = async (jobPostPayload) => {
    try {
        const reqUrl = `${backendUrl}/create`;
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = token;
        await axios.post(reqUrl, jobPostPayload);
    } 
    catch (error) {
        return error;
    }
};

export const jobPostDetailsById = async (jobId, userId) => {
    try {
        const reqUrl = `${backendUrl}/job-details/${jobId}/${userId}`;
        const response = await axios.get(reqUrl);
        return response.data;
    } catch (error) {
        console.log(error);
        alert("Something went wrong getting jobpost by id");
    }
};

export const updateJobPostById = async (jobPostId, updatedFormData) => {
    try {
        const reqUrl = `${backendUrl}/update/${jobPostId}`;
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = token;
        const response = await axios.put(reqUrl, updatedFormData);
        return response?.data;
    } 
    catch (error) {
        console.log(error);
        alert("Something went wrong while updating jobpost by id");
    }
};

export const getAllJobs = async (filter) => {
    try {
        const userId = localStorage.getItem("userId") || "";
        const reqUrl = `${backendUrl}/all/${userId}?searchQuery=${filter?.title || ""}&skills=${filter?.skills || ""}`;
        const response = await axios.get(reqUrl);
        return response?.data;
    } 
     catch (error) {
        console.log(error);
        alert("Something went wrong for getting all jobs");
    }
};
