
import FormWithValidation from '../components/FormWithValidation'
import SimpleForm from '../components/SimpleForm'
import UserForm from '../components/UserForm'

export default function Home() {
  return (
    <>
      <h3>"Simple" Form using a Controlled Component</h3>
      <hr />
      <SimpleForm />
      <h3>"User" Form using React Hook Form</h3>
      <hr />
      <UserForm />
      <h3>Form with Validation</h3>
      <FormWithValidation />
    </>
  )
}
