- use params in react

- `import {useParams} from 'react-router-dom'`
- we can access the the params by :
  {params.id} etc..

- Navigate we use it to redirect the user.

```
import {Navigate , useNavigate} from 'react-router-dom'

if (status==404) {
    <Navigate> to={'/404'} />
}


```

- we can use `useNavigate hook` <br>
  we need to take an instance from it before
  ` const navigate=useNavigate()`

```
const onClick=()=>{
    navigate('/home')
}
```

- ## Section 6 context API :
- provide a way to pass data through the component tree without having to pass props down manually ay every level.
