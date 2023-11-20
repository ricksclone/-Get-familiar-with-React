
//hello를 클릭하면, alert를 반환하는 방식의 코드 
const Hello = () => {
    const onClick = () => {
        alert('hello!')
    }

const text = 'Hello,React'

return (
    <div onClick={onClick}>
        {text}
    </div>
)
}


export default Hello 

// 파일명과 달라도 Hello라는 함수를 가져와서 내부에 온클릭 메서드를 사용하고, alert 창으로
//hello라는 안내 문구를 띄어준다. 또한 함수 안에 Hello,React 라는 문장을 선언했을때 
//그 문장을 클릭하면 alert 메세지가 나올 수 있도록 한다. 