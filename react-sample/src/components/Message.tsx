
//정의된 컴포턴트를 content 라는 값을 넣는다 
//코드 재사용을 위한 사용법

const Container = (props : {title:string; children: React.ReactElement }) => {
    const {title,children} = props
    return (
        <div style={{background: 'red'}}> {/*스타일을 지정해주고 싶을 떄 사용*/}
            <span>{title}</span>
            <div>{children}</div> {/*props에 children 값을 더 추가하면,시작태그 그리고 종료태그로 감싼다*/}
        </div>
    )
}

const Parent =() => {
    return (
        <Container title = "hello">
            <p>이 부분은 배경 색으로 둘러쌓여있습니다.</p>
            </Container>

    )
}

export default Parent

//return 값으로 하나만 받을 때 <p> </p>  여러개 받을 때 ()


/*

*/







