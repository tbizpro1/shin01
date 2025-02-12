export default function get_enterprise_by_id() {
        const { user, token, enterprise } = useContext(AuthContext)
        const [enterpriseDetail, setEnterpriseDetail] = useState("")
    
        const enterprise_id = enterprise?.enterprise_id
    
        
        console.log("eeee",enterpriseDetail)
        const { register, handleSubmit, control, reset } = useForm({
            defaultValues: {
                ...enterpriseDetail
            }
        })
    
        useEffect(() => {
            if (enterprise_id && token) {
                getEnterpriseById(enterprise_id, token).then(response => {
                    setEnterpriseDetail(response);
                    reset({
                        ...response,
                        file: response?.file || enterpriseUnd,
                    });
                });
            }
        }, [enterprise_id, token, reset]);
};
