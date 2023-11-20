
//정의된 컴포턴트를 content 라는 값을 넣는다 
//코드 재사용을 위한 사용법

const Bext = (props:{content:string}) =>{
    const {content} = props //props 객체에서 content 라는 속성을 추출하는 것을 말한다
    return <p className="Next">{content}</p>
   
//시간되면 console.log로 찍어보기
}


// 정의된 컴포넌트를 Message 라는 변수에 대입한다. 
const Message = (props : {}) => {
    const content1 = 'this is a parent component' //props 객체가 규정되어 있지 않기 때문에 아무 변수나 넣고 문장을 집어 넣을 수 있다
    const content2 = 'this is a youbin world'
    return (
        <div>
            <Bext content={content1} />
            <Bext content={content2}/>
        </div>
    )
}

export default Message
