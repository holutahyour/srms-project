import { HiSortDescending } from "react-icons/hi"
import Avatar from "../../components/Avatar"
import Dropdown from "../../components/Dropdown"
import List, { ListRow } from "../../components/List/List"
import { useStore } from "../../stores/store"
import TextInput from "../../components/Form/TextInput"
import { Form, Formik } from "formik"
import { BiDetail, BiSearch } from "react-icons/bi"
import { Link } from "react-router-dom"
import CheckboxGroup from "../../components/CheckboxGroup"

function User() {
    const { authStore } = useStore()
    const { userArrays } = authStore
   
    return (
        <div className="">
            <div className="space-y-2">
                <Formik
                    initialValues={{}}
                    onSubmit={(
                        values,
                        { setSubmitting }
                    ) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                    <Form className="flex items-center justify-between gap-2"
                    >
                        <div className="flex items-center gap-5">
                            <TextInput label='' id='search' name='search' placeholder="search" type="TextIconInput" icon={<BiSearch />} />                            
                        </div>
                        <div className="flex items-center gap-3">
                            <HiSortDescending size={20} />
                            <Dropdown title="Users" dropDownStyle="dropdown-end" className="capitalize rounded-sm btn-sm">
                                <CheckboxGroup name="Status" data={["All", "Admin", "Adviser", "Student"]} />                               
                            </Dropdown>
                        </div>
                    </Form>
                </Formik>
                <List>
                    {userArrays.map((user, index) => {
                        return (
                            <ListRow key={index}>
                                <Avatar imageUrl={user.imageUrl} size="xs" />
                                <div className="flex items-center flex-1 gap-4 my-auto">
                                    <div>
                                        <h1 className="text-sm font-semibold text-gray-800 capitalize">{user.firstName} {user.lastName}</h1>
                                        <h1 className="text-sm text-gray-400-100">{user.username}</h1>
                                    </div>
                                    {/* <div className="text-xs badge badge-error">uncompleted</div> */}
                                </div>
                                <Link
                                    to={`/students/${user.id}`}
                                    className="flex items-center justify-center gap-2 px-3 py-2 text-white bg-gray-500 rounded-md cursor-pointer borderborder-gray-500 hover:border-gray-200"
                                >
                                    <BiDetail className="w-5 h-5" />
                                    <p className="text-sm font-medium">View</p>
                                </Link>
                                {/* <Dropdown
                                        buttonStyle="btn-ghost btn-circle"
                                        dropDownStyle="dropdown-end" icon={<HiDotsVertical size={20}
                                        />}>
                                        <div
                                            className="flex items-center justify-center gap-2 px-3 py-2 text-white bg-gray-500 rounded-md cursor-pointer borderborder-gray-500 hover:border-gray-200"
                                        >
                                            <BiDetail className="w-5 h-5" />

                                            <p className="text-sm font-medium">View</p>
                                        </div>
                                    </Dropdown> */}
                            </ListRow>
                        )
                    })}
                </List>
            </div>
        </div>
    )
}

export default User