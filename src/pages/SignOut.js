export default function SignOut() {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   dispatch({ type: 'auth/init' });
   navigate('/');

   return null;
}