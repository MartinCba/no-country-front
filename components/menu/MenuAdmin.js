import React from 'react';
import { useRouter } from 'next/router';
import { Dropdown, Menu} from 'semantic-ui-react';
import Link from 'next/link';

export default function MenuAdmin(props) {
    
    const {user}= props;
    console.log(user);
    const router = useRouter();
    return (
        <Menu className='menuEspecial'>
            <Menu.Item className="menuAdmin__responsive">
                <Dropdown text='Administrar'>
                    <Dropdown.Menu>
                        {user.Usuario.rol==="admin" ?
                            (<>
                                <Dropdown.Item text='Alumnos' icon='caret right' onClick={() => router.push("/admin/Alumnos")} /><Dropdown.Item text='Profesores' icon='caret right' onClick={() => router.push("/admin/Profesores")} /><Dropdown.Item text='Actividades' icon='caret right' onClick={() => router.push("/admin/Actividades")} />
                            </>) :
                            (<>
                                <Dropdown.Item text='Alumnos' icon='caret right' onClick={() => router.push("/admin/Alumnos")} />
                                <Dropdown.Item text='Actividades' icon='caret right' onClick={() => router.push("/admin/Actividades")} />
                            </>)    
                        }
                        
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
            <Menu.Item className="menuAdmin">
                <div>
                    <Link href="/admin/Alumnos">
                    <a>Alumnos</a>
                    </Link>
                </div>
            </Menu.Item>
            {user.Usuario.rol==="admin" ?
            (<Menu.Item className="menuAdmin">
                <div>
                    <Link href="/admin/Profesores">
                        <a>Profesores</a>
                    </Link>
                </div>
            </Menu.Item>)
            : (
              <>
              </>  
            )
            }
            <Menu.Item className="menuAdmin">
                <div>
                    <Link href="/admin/Actividades">
                    <a>Actividades</a>
                    </Link>
                </div>
            </Menu.Item>
        </Menu>
    )
}
