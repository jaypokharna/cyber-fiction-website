function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    var locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  // Canvas code starts here
  function model2(){
  
    const canvas = document.getElementById('canvas2');
    const context = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    
    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });
    
    // Characters
    function files(index) {
      var data = `
        ./characters2/0001.png
        ./characters2/0002.png
        ./characters2/0003.png
        ./characters2/0004.png
        ./characters2/0005.png
        ./characters2/0006.png
        ./characters2/0007.png
        ./characters2/0008.png
        ./characters2/0009.png
        ./characters2/0010.png
        ./characters2/0011.png
        ./characters2/0012.png
        ./characters2/0013.png
        ./characters2/0014.png
        ./characters2/0015.png
        ./characters2/0016.png
        ./characters2/0017.png
        ./characters2/0018.png
        ./characters2/0019.png
        ./characters2/0020.png
        ./characters2/0021.png
        ./characters2/0022.png
        ./characters2/0023.png
        ./characters2/0024.png
        ./characters2/0025.png
        ./characters2/0026.png
        ./characters2/0027.png
        ./characters2/0028.png
        ./characters2/0029.png
        ./characters2/0030.png
        ./characters2/0031.png
        ./characters2/0032.png
        ./characters2/0033.png
        ./characters2/0034.png
        ./characters2/0035.png
        ./characters2/0036.png
        ./characters2/0037.png
        ./characters2/0038.png
        ./characters2/0039.png
        ./characters2/0040.png
        ./characters2/0041.png
        ./characters2/0042.png
        ./characters2/0043.png
        ./characters2/0044.png
        ./characters2/0045.png
        ./characters2/0046.png
        ./characters2/0047.png
        ./characters2/0048.png
        ./characters2/0049.png
        ./characters2/0050.png
        ./characters2/0051.png
        ./characters2/0052.png
        ./characters2/0053.png
        ./characters2/0054.png
        ./characters2/0055.png
        ./characters2/0056.png
        ./characters2/0057.png
        ./characters2/0058.png
        ./characters2/0059.png
        ./characters2/0060.png
        ./characters2/0061.png
        ./characters2/0062.png
        ./characters2/0063.png
        ./characters2/0064.png
        ./characters2/0065.png
        ./characters2/0066.png
        ./characters2/0067.png
        ./characters2/0068.png
        ./characters2/0069.png
        ./characters2/0070.png
        ./characters2/0071.png
        ./characters2/0072.png
        ./characters2/0073.png
        ./characters2/0074.png
        ./characters2/0075.png
        ./characters2/0076.png
        ./characters2/0077.png
        ./characters2/0078.png
        ./characters2/0079.png
        ./characters2/0080.png
        ./characters2/0081.png
        ./characters2/0082.png
        ./characters2/0083.png
        ./characters2/0084.png
        ./characters2/0085.png
        ./characters2/0086.png
        ./characters2/0087.png
        ./characters2/0088.png
        ./characters2/0089.png
        ./characters2/0090.png
        ./characters2/0091.png
        ./characters2/0092.png
        ./characters2/0093.png
        ./characters2/0094.png
        ./characters2/0095.png
        ./characters2/0096.png
        ./characters2/0097.png
        ./characters2/0098.png
        ./characters2/0099.png
        ./characters2/0100.png
        ./characters2/0101.png
        ./characters2/0102.png
        ./characters2/0103.png
        ./characters2/0104.png
        ./characters2/0105.png
        ./characters2/0106.png
        ./characters2/0107.png
        ./characters2/0108.png
        ./characters2/0109.png
        ./characters2/0110.png
        ./characters2/0111.png
        ./characters2/0112.png
        ./characters2/0113.png
        ./characters2/0114.png
        ./characters2/0115.png
        ./characters2/0116.png
        ./characters2/0117.png
        ./characters2/0118.png
        ./characters2/0119.png
        ./characters2/0120.png
        ./characters2/0121.png
        ./characters2/0122.png
        ./characters2/0123.png
        ./characters2/0124.png
        ./characters2/0125.png
        ./characters2/0126.png
        ./characters2/0127.png
        ./characters2/0128.png
        ./characters2/0129.png
        ./characters2/0130.png
        ./characters2/0131.png
        ./characters2/0132.png
        ./characters2/0133.png
        ./characters2/0134.png
        ./characters2/0135.png
        ./characters2/0136.png
        ./characters2/0137.png
        ./characters2/0138.png
        ./characters2/0139.png
        ./characters2/0140.png
        ./characters2/0141.png
        ./characters2/0142.png
        ./characters2/0144.png
        ./characters2/0145.png
        ./characters2/0146.png
        ./characters2/0147.png
        ./characters2/0148.png
        ./characters2/0149.png
        ./characters2/0150.png
        ./characters2/0151.png
        ./characters2/0152.png
        ./characters2/0153.png
        ./characters2/0154.png
        ./characters2/0155.png
        ./characters2/0156.png
        ./characters2/0157.png
        ./characters2/0158.png
        ./characters2/0159.png
        ./characters2/0160.png
        ./characters2/0161.png
        ./characters2/0162.png
        ./characters2/0163.png
        ./characters2/0164.png
        ./characters2/0165.png
        ./characters2/0166.png
        ./characters2/0167.png
        ./characters2/0168.png
        ./characters2/0169.png
        ./characters2/0170.png
        ./characters2/0171.png
        ./characters2/0172.png
        ./characters2/0173.png
        ./characters2/0174.png
        ./characters2/0175.png
        ./characters2/0176.png
        ./characters2/0177.png
        ./characters2/0178.png
        ./characters2/0179.png
        ./characters2/0180.png
        ./characters2/0181.png
        ./characters2/0182.png
        ./characters2/0183.png
        ./characters2/0184.png
        ./characters2/0185.png
        ./characters2/0186.png
        ./characters2/0187.png
        ./characters2/0188.png
        ./characters2/0189.png
        ./characters2/0190.png
        ./characters2/0191.png
        ./characters2/0192.png
        ./characters2/0193.png
        ./characters2/0194.png
        ./characters2/0195.png
        ./characters2/0196.png
        ./characters2/0197.png
        ./characters2/0198.png
        ./characters2/0199.png
        ./characters2/0200.png
        ./characters2/0201.png
        ./characters2/0202.png
        ./characters2/0203.png
        ./characters2/0204.png
        ./characters2/0205.png
        ./characters2/0206.png
        ./characters2/0207.png
        ./characters2/0208.png
        ./characters2/0209.png
        ./characters2/0210.png
        ./characters2/0211.png
        ./characters2/0212.png
        ./characters2/0213.png
        ./characters2/0214.png
        ./characters2/0215.png
        ./characters2/0216.png
        ./characters2/0217.png
        ./characters2/0218.png
        ./characters2/0219.png
        ./characters2/0220.png
        ./characters2/0221.png
        ./characters2/0222.png
        ./characters2/0223.png
        ./characters2/0224.png
        ./characters2/0225.png
        ./characters2/0226.png
        ./characters2/0227.png
        ./characters2/0228.png
        ./characters2/0229.png
        ./characters2/0230.png
        ./characters2/0231.png
        ./characters2/0232.png
        ./characters2/0233.png
        ./characters2/0234.png
        ./characters2/0235.png
        ./characters2/0236.png
        ./characters2/0237.png
        ./characters2/0238.png
        ./characters2/0239.png
        ./characters2/0240.png
        ./characters2/0241.png
        ./characters2/0242.png
        ./characters2/0243.png
        ./characters2/0244.png
        ./characters2/0245.png
        ./characters2/0246.png
        ./characters2/0247.png
        ./characters2/0248.png
        ./characters2/0249.png
        ./characters2/0250.png
        ./characters2/0251.png
        ./characters2/0252.png
        ./characters2/0253.png
        ./characters2/0254.png
        ./characters2/0255.png
        ./characters2/0256.png
        ./characters2/0257.png
        ./characters2/0258.png
        ./characters2/0259.png
        ./characters2/0260.png
        ./characters2/0261.png
        ./characters2/0262.png
        ./characters2/0263.png
        ./characters2/0264.png
        ./characters2/0265.png
        ./characters2/0266.png
        ./characters2/0267.png
        ./characters2/0268.png
        ./characters2/0269.png
        ./characters2/0270.png
        ./characters2/0271.png
        ./characters2/0272.png
        ./characters2/0273.png
        ./characters2/0274.png
        ./characters2/0275.png
        ./characters2/0276.png
        ./characters2/0277.png
        ./characters2/0278.png
        ./characters2/0279.png
        ./characters2/0280.png
        ./characters2/0281.png
        ./characters2/0282.png
        ./characters2/0283.png
        ./characters2/0284.png
        ./characters2/0285.png
        ./characters2/0286.png
        ./characters2/0287.png
        ./characters2/0288.png
        ./characters2/0289.png
        ./characters2/0290.png
        ./characters2/0291.png
        ./characters2/0292.png
        ./characters2/0293.png
        ./characters2/0294.png
        ./characters2/0295.png
        ./characters2/0296.png
        ./characters2/0297.png
        ./characters2/0298.png
        ./characters2/0299.png
        ./characters2/0300.png
        ./characters2/0301.png
        ./characters2/0302.png
        ./characters2/0303.png
        ./characters2/0304.png
        ./characters2/0305.png
        ./characters2/0306.png
        ./characters2/0307.png
        ./characters2/0308.png
        ./characters2/0309.png
        ./characters2/0310.png
        ./characters2/0311.png
        ./characters2/0312.png
        ./characters2/0313.png
        ./characters2/0314.png
        ./characters2/0315.png
        ./characters2/0316.png
        ./characters2/0317.png
        ./characters2/0318.png
        ./characters2/0319.png
        ./characters2/0320.png
        ./characters2/0321.png
        ./characters2/0322.png
        ./characters2/0323.png
        ./characters2/0324.png
        ./characters2/0325.png
        ./characters2/0326.png
        ./characters2/0327.png
        ./characters2/0328.png
        ./characters2/0329.png
        ./characters2/0330.png
        ./characters2/0331.png
        ./characters2/0332.png
        ./characters2/0333.png
        ./characters2/0334.png
        ./characters2/0335.png
        ./characters2/0336.png
        ./characters2/0337.png
        ./characters2/0338.png
        ./characters2/0339.png
        ./characters2/0340.png
        ./characters2/0341.png
        ./characters2/0342.png
        ./characters2/0343.png
        ./characters2/0344.png
        ./characters2/0345.png
        ./characters2/0346.png
        ./characters2/0347.png
        ./characters2/0348.png
        ./characters2/0349.png
        ./characters2/0350.png
        ./characters2/0351.png
        ./characters2/0352.png
        ./characters2/0353.png
        ./characters2/0354.png
        ./characters2/0355.png
        ./characters2/0356.png
        ./characters2/0357.png
        ./characters2/0358.png
        ./characters2/0359.png
        ./characters2/0360.png
        ./characters2/0361.png
        ./characters2/0362.png
        ./characters2/0363.png
        ./characters2/0364.png
        ./characters2/0365.png
        ./characters2/0366.png
        ./characters2/0367.png
        ./characters2/0368.png
        ./characters2/0369.png
        ./characters2/0370.png
        ./characters2/0371.png
        ./characters2/0372.png
        ./characters2/0373.png
        ./characters2/0374.png
        ./characters2/0375.png
        ./characters2/0376.png
        ./characters2/0377.png
        ./characters2/0378.png
        ./characters2/0379.png
        ./characters2/0380.png
        ./characters2/0381.png
        ./characters2/0382.png
        ./characters2/0383.png
        ./characters2/0384.png
        ./characters2/0385.png
        ./characters2/0386.png
        ./characters2/0387.png
        ./characters2/0388.png
        ./characters2/0389.png
        ./characters2/0390.png
        ./characters2/0391.png
        ./characters2/0392.png
        ./characters2/0393.png
        ./characters2/0394.png
        ./characters2/0395.png
        ./characters2/0396.png
        ./characters2/0397.png
        ./characters2/0398.png
        ./characters2/0399.png
        ./characters2/0400.png
        ./characters2/0401.png
        ./characters2/0402.png
        ./characters2/0403.png
        ./characters2/0404.png
        ./characters2/0405.png
        ./characters2/0406.png
        ./characters2/0407.png
        ./characters2/0408.png
        ./characters2/0409.png
        ./characters2/0410.png
        ./characters2/0411.png
        ./characters2/0412.png
        ./characters2/0413.png
        ./characters2/0414.png
        ./characters2/0415.png
        ./characters2/0416.png
        ./characters2/0417.png
        ./characters2/0418.png
        ./characters2/0419.png
        ./characters2/0420.png
        ./characters2/0421.png
        ./characters2/0422.png
        ./characters2/0423.png
        ./characters2/0424.png
        ./characters2/0425.png
        ./characters2/0426.png
        ./characters2/0427.png
        ./characters2/0428.png
        ./characters2/0429.png
        ./characters2/0430.png
        ./characters2/0431.png
        ./characters2/0432.png
        ./characters2/0433.png
        ./characters2/0434.png
        ./characters2/0435.png
        ./characters2/0436.png
        ./characters2/0437.png
        ./characters2/0438.png
        ./characters2/0439.png
        ./characters2/0440.png
        ./characters2/0441.png
        ./characters2/0442.png
        ./characters2/0443.png
        ./characters2/0444.png
        ./characters2/0445.png
        ./characters2/0446.png
        ./characters2/0447.png
        ./characters2/0448.png
        ./characters2/0449.png
        ./characters2/0450.png
        ./characters2/0451.png
        ./characters2/0452.png
        ./characters2/0453.png
        ./characters2/0454.png
        ./characters2/0455.png
        ./characters2/0456.png
        ./characters2/0457.png
        ./characters2/0458.png
        ./characters2/0459.png
        ./characters2/0460.png
        ./characters2/0461.png
        ./characters2/0462.png
        ./characters2/0463.png
        ./characters2/0464.png
        ./characters2/0465.png
        ./characters2/0466.png
        ./characters2/0467.png
        ./characters2/0468.png
        ./characters2/0469.png
       `;
      return data.split("\n")[index];
    }
    
    
    const frameCount = 469;
    
    const images = [];
    const imageSeq = {
      frame: 1,
    };
    
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }
    
    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
        scrub: 0.15,
        trigger: `#canvas2`,
        start: `top top`,
        end: `600% top`,
        scroller: `#main`,
      },
      onUpdate: render,
    });
    
    images[1].onload = render;
    
    function render() {
      scaleImage(images[imageSeq.frame], context);
    }
    
    function scaleImage(img, ctx) {
      const canvas = ctx.canvas;
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
    ScrollTrigger.create({
      trigger: "#canvas2",
      pin: true,
      // markers:true,
      scroller: `#main`,
      start: `top top`,
      end: `600% top`,
    });
    
    
    gsap.to("#page1", {
      scrollTrigger: {
        trigger: `#page1`,
        start: `top top`,
        end: `bottom top`,
        pin: true,
        scroller: `#main`
      }
    })
    gsap.to("#page2", {
      scrollTrigger: {
        trigger: `#page2`,
        start: `top top`,
        end: `bottom top`,
        pin: true,
        scroller: `#main`
      }
    })
    gsap.to("#page3", {
      scrollTrigger: {
        trigger: `#page3`,
        start: `top top`,
        end: `bottom top`,
        pin: true,
        scroller: `#main`
      }
    })
    
    gsap.to("#page4", {
      scrollTrigger: {
        trigger: `#page4`,
        start: `top top`,
        end: `bottom top`,
        pin: true,
        scroller: `#main`
      }
    })
    
    }

    model2()
    
    
  // Darkmode Lightmode code starts here
  

  var mode = document.getElementById('modes');

  mode.addEventListener('click',()=>{
      if (mode.innerHTML == "Dark Mode"){

      window.location.replace("darkmode.html");
          
      }
      else{

        window.location.replace("index.html");

    }
  });