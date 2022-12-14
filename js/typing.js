var typed = new Typed('.memory', {
    /**
     * @property {array} strings strings to be typed
     * @property {string} stringsElement ID of element containing string children
     */
    strings: [
    `
    - Đây là trái tim anh đã dành tặng cho em, lúc mà anh gửi cho em nhìn nó không được đẹp như bây giờ, anh đã cố gắng làm để nó trở nên đẹp nhất. Cũng giống như sự cố gắng trong tình yêu của anh dành cho em vậy.
    <br/>
    <br/>
    - Em có biết anh tiếc nuối trong năm 2022 của anh điều gì nhất không?                                                
    <br/>
    <br/>
    - Đó là anh không nói ra câu "em đồng ý làm người yêu anh nhé" trước mặt em.
    <br/>
    - Em có biết ý nghĩa chiếc lắc tay mà anh đã tặng cho em không? 
    <br/>
    - Ngày 22/10/2022 anh đã tỏ tình với em ở giữa hồ, khi đó em đã nói hiện tại tình yêu của chúng ta chưa đủ nhiều và em cần thêm thời gian. 
    <br/>
    - Thời gian trôi qua thật nhanh đấy, mới đó đã tròn 2 tháng. 
    <br/>
    - Cái ngày mà chúng ta đi hồ gươm chơi, anh đã lên kế hoạch hẹn em ngày 22/12/2022 đi chơi, nhưng trùng hợp em đã xin nghỉ ngày 21/12/2022. Nên anh đã hẹn em tối hôm đó đi chơi với anh. 
    <br/>
    - Kế hoạch của anh là muốn dẫn em đến 1 chỗ hẹn hò thật đẹp để anh tỏ tình với em.
    <br/>
    - Dù kết quả của buổi hẹn hò thành công hay thất bại đi chăng nữa thì anh cũng muốn tặng chiếc lắc tay cho em. 
    <br/>
    - Anh hy vọng mỗi khi em nhìn chiếc lắc tay, thì em sẽ nhớ là đã có 1 người đã từng dành nhất nhiều tình cảm dành cho 1 cô gái. Và cô gái đó chính là em.
    <br/>
    - Chiếc lắc tay đó rất đẹp, anh muốn dành nó cho em. Thời gian theo đuổi em cũng bằng giá trị của chiếc lắc tay nên anh thấy rất ý nghĩa đối với anh. 
    <br/>
    - Nhưng mà nó chỉ là dự định của anh và không thể thực hiện được đó. Trước giờ anh rất chiều em, nên anh luôn hỏi em trước và làm theo điều mà em thích. 
    <br/>
    - Đôi khi cứ để cho nó theo tự nhiên mà không cần suy nghĩ trước lại hay hơn. Hôm đó chúng ta có một buổi đi chơi rất vui vẻ bên nhau và cũng là buổi cuối cùng của năm 2022 mà chúng ta đi chơi. 
    <br/>
    - Anh mong rằng trong thời gian sắp tới hoặc trong tương lai xa, sẽ có 1 người mang đến những nụ cười, hạnh phúc và đặc biệt có thể cho em cảm giác tin tưởng để em có thể chia sẻ suy nghĩ của em.  
    <br/>
    - Xin lỗi vì anh đã không làm được như em mong muốn. Hy vọng sang năm 2023 chúng ta có thể cùng nhau cố gắng vun đắp mối quan hệ này trở nên tốt hơn hoặc là hãy để nó dừng lại ở năm 2022.
    <br/>
    - Tạm biệt ngày cuối cùng của năm 2022, Tạm biệt một năm không trọn vẹn.
    <br/><br/>
    - Cảm ơn em đã ở bên anh trong năm 2022 vừa qua. Mong rằng năm 2023 sắp đến sẽ có những này tháng yên bình ..., chúng ta đều sẽ luôn hạnh phúc <br/>
    `    
     ],
    stringsElement: null,

    /**
     * @property {number} typeSpeed type speed in milliseconds
     */
    typeSpeed: 100,

    /**
     * @property {number} startDelay time before typing starts in milliseconds
     */
    startDelay: 150,

    /**
     * @property {number} backSpeed backspacing speed in milliseconds
     */
    backSpeed: 0,

    /**
     * @property {boolean} smartBackspace only backspace what doesn't match the previous string
     */
    smartBackspace: true,

    /**
     * @property {boolean} shuffle shuffle the strings
     */
    shuffle: false,

    /**
     * @property {number} backDelay time before backspacing in milliseconds
     */
    backDelay: 700,

    /**
     * @property {boolean} fadeOut Fade out instead of backspace
     * @property {string} fadeOutClass css class for fade animation
     * @property {boolean} fadeOutDelay Fade out delay in milliseconds
     */
    fadeOut: false,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,

    /**
     * @property {boolean} loop loop strings
     * @property {number} loopCount amount of loops
     */
    loop: false,
    loopCount: Infinity,

    /**
     * @property {boolean} showCursor show cursor
     * @property {string} cursorChar character for cursor
     * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
     */
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,

    /**
     * @property {string} attr attribute for typing
     * Ex: input placeholder, value, or just HTML text
     */
    attr: null,

    /**
     * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
     */
    bindInputFocusEvents: false,

    /**
     * @property {string} contentType 'html' or 'null' for plaintext
     */
    contentType: 'html',

    /**
     * Before it begins typing
     * @param {Typed} self
     */
    onBegin: (self) => { },

    /**
     * All typing is complete
     * @param {Typed} self
     */
    onComplete: (self) => { },

    /**
     * Before each string is typed
     * @param {number} arrayPos
     * @param {Typed} self
     */
    preStringTyped: (arrayPos, self) => { },

    /**
     * After each string is typed
     * @param {number} arrayPos
     * @param {Typed} self
     */
    onStringTyped: (arrayPos, self) => {
     },

    /**
     * During looping, after last string is typed
     * @param {Typed} self
     */
    onLastStringBackspaced: (self) => { },

    /**
     * Typing has been stopped
     * @param {number} arrayPos
     * @param {Typed} self
     */
    onTypingPaused: (arrayPos, self) => { },

    /**
     * Typing has been started after being stopped
     * @param {number} arrayPos
     * @param {Typed} self
     */
    onTypingResumed: (arrayPos, self) => { },

    /**
     * After reset
     * @param {Typed} self
     */
    onReset: (self) => { },

    /**
     * After stop
     * @param {number} arrayPos
     * @param {Typed} self
     */
    onStop: (arrayPos, self) => { },

    /**
     * After start
     * @param {number} arrayPos
     * @param {Typed} self
     */
    onStart: (arrayPos, self) => { },

    /**
     * After destroy
     * @param {Typed} self
     */
    onDestroy: (self) => { }
});