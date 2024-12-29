
function Divider({headingSm, headingLg}) {
  return (
    <div className="flex flex-col items-center justify-center p-32 gap-4">
        <div className="text-small text-text_gray">{headingSm}</div>
        <div className="text-heading font-bold">{headingLg}</div>
        <hr className="w-32 h-0.5 bg-text_hover mt-5" />
    </div>
  )
}

export default Divider