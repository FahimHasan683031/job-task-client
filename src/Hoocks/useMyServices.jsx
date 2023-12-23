import {
    useQuery, 
  } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSicure';
import useAuthContext from './useAuthContext';

const useMyServices = () => {
    const axiosSecure=useAxiosSecure()
    const { user } = useAuthContext()
    const {refetch,data: tasks=[]}= useQuery({
        queryKey:['MYservicesData'],
        queryFn:async()=>{
           const res = await axiosSecure.get(`/tasks?email=${user?.email}`)
           return res.data;
        }
    })
    return (
        [tasks,refetch]
    );
};

export default useMyServices;