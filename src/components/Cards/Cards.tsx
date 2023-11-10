import { Carousel } from "react-bootstrap"

const Cards = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDyy51q6gnl-wNjyl6eUxt9Pni-Dduqr2CrZ7opWImQsVHOdZZeLrW0IEmuvzmdFp4GHbBLWeDUjy0qoc4izPp2V_aDq_KBzkNsTgndy8rPGBVpH1Zl7YbHlFLYp8nmsX6ws-ri6UoVYmXsTSrk1i_0rh-O3UTF_1Oe6Q2UyLudMz1zCpHXFag8KMkeQ/s1920/crossfire-pc-wallpaper-1080p.jpg" alt="" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src="https://blogger.googleusercontent.com/img/a/AVvXsEh2RDz4KFPFL1Aw3tsFta0GBA9pt1uj0jysPBz5-s_9O5Cgm4pCP0msIztH82qW89CpIFQOQnApd9KHCsfyq5MXLzn3j5gG7GVZQEjchp0OVtey5Wmp2MQYMduTvD9E_etlbwz0iAwrRYkNMBEoIZOV_goi--Dq0wyTkL3uHg0rEvnyM81wno1kQDeBNU_f" alt="" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src="https://blogger.googleusercontent.com/img/a/AVvXsEgEaAsUbU2AXfv8rpd6n3sJFkoBPlOAoogp8TE8CwJA1UlApu2rtpy3dZUxL3k8uGvZR5sTlE7TeFd5NJFySxIXO71tyKudNbDo6c1fazuGMc3LTpeuFXywyx_q1Q5eUIbCSJoU4LGYze5PX9PXa3vpMOWPC-jU5NZSki3DlLHPvtyzHNJlquSUJr9SvI8x" alt="" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Cards