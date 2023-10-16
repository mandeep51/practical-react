import React from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#__next');
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

function Home() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }
    
  
    function closeModal() {
      setIsOpen(false);
    }
   
  return (
    <div>
      <button onClick={()=>setIsOpen(!modalIsOpen)}>Open Modal</button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia hic aliquam illo quod perspiciatis eveniet quisquam cumque necessitatibus facere nostrum debitis libero molestiae sapiente modi maiores perferendis non culpa voluptates accusamus ea, quasi porro? Placeat consequuntur atque quae quibusdam cum vel sit maiores, dolore rem odit perspiciatis commodi ullam aspernatur? Voluptatum sapiente animi enim, mollitia obcaecati quisquam magnam recusandae nulla architecto fugit asperiores repellendus nobis dolorem deserunt beatae quam temporibus maiores, minima alias ipsum quibusdam hic consectetur modi laudantium! Perferendis autem, accusamus exercitationem magni iure alias commodi deserunt odit, eum sunt ea quidem ducimus quos explicabo ipsum omnis sint totam nemo eaque harum quis iusto. Tempora odit, quo id molestiae blanditiis eius quasi mollitia praesentium officiis alias, rem delectus veritatis non culpa maxime amet tempore ipsa vel quos, nulla repudiandae totam aliquid cumque. Modi fuga quo, unde accusamus natus labore sunt odit iste, eos hic ad sit reiciendis cupiditate quidem eligendi nemo nam? Quod quo perspiciatis ut, ducimus eius cum velit sequi, corrupti dolore aut id tenetur voluptates! Commodi ullam error id sunt voluptatum ea, earum in, dicta laboriosam deleniti laudantium sequi ipsam? Atque eaque in fuga dolorem expedita magnam maiores libero iure fugiat facilis impedit dignissimos rem, voluptatem eos fugit est ab dicta nulla animi esse consectetur quod. Eius distinctio assumenda eos nemo veniam possimus voluptates necessitatibus fugit dicta omnis fuga, doloremque natus optio totam quam commodi temporibus tempora et. Nisi eius provident cumque suscipit repellendus atque incidunt delectus beatae ea deleniti ipsum odit, molestiae sapiente, sit, eum consectetur dolorem excepturi asperiores pariatur! Eligendi, porro, asperiores beatae voluptatem corrupti fugiat amet illum dolor quia fuga omnis sint, consequatur harum natus eos commodi rem ad et inventore a dignissimos atque ut! Atque nisi aliquid exercitationem aspernatur fugiat velit quibusdam natus porro neque sunt iste voluptatem, quod eveniet, cupiditate dolor, hic numquam perferendis. Itaque, optio. Quidem porro similique, eum tenetur natus magni neque consequatur eius quod, nostrum quaerat. Recusandae exercitationem cum ad eveniet corporis dolores rerum aut dolore! Iure, rem id illum ad et minus cupiditate voluptatum libero, ut ipsam consequuntur, ea pariatur! Nulla maxime quas aspernatur vero distinctio tempore fugiat autem at alias consectetur, deleniti, natus omnis doloribus a dolore quidem sequi odit aperiam nesciunt tenetur amet animi numquam voluptates. Inventore amet magni blanditiis, sit ut nulla quaerat unde porro cumque ad excepturi rem veniam minima illo totam dolorum ducimus quae obcaecati accusamus corrupti, aliquam est deserunt reiciendis optio! Exercitationem dicta distinctio corrupti unde inventore illum tempore voluptate excepturi repellendus ab quia, optio, obcaecati harum expedita. Placeat autem corporis quia fugiat, ratione quidem repellat labore alias velit deserunt neque iste iure officia, optio eveniet corrupti nemo aliquam aspernatur architecto provident. Aut eaque, tenetur enim nulla architecto earum veniam dignissimos nostrum sit corporis cupiditate quo. Quia sapiente at eligendi nostrum molestiae dolorem ipsa quasi hic inventore pariatur, soluta eius, odio doloribus molestias dolore laborum explicabo consequatur aspernatur, porro earum. Alias nulla quod, minima pariatur libero, reiciendis consequatur qui ipsum doloribus totam ipsam. Quidem aperiam esse earum error ducimus quod expedita eaque ipsa repellat dicta blanditiis necessitatibus tempora fugiat, exercitationem libero ad quis, harum unde impedit cum odit officia? Iure consequatur magni voluptate beatae facilis, adipisci pariatur animi dicta exercitationem amet dignissimos impedit voluptas consectetur saepe, dolores ipsa, sapiente laboriosam commodi quibusdam ab corporis minima neque unde. Aliquid placeat iure deleniti aut. Necessitatibus quae dolor exercitationem neque ab cumque, architecto id vitae placeat, est esse aspernatur sapiente suscipit pariatur. Dicta iste, deserunt doloribus asperiores sequi modi? Sunt fugiat odio vel aut optio exercitationem, laboriosam repudiandae officiis nesciunt consequatur alias veritatis commodi voluptates eligendi, nobis molestiae expedita. Beatae, aliquid itaque distinctio nostrum, dolore consectetur fugiat unde assumenda ex ipsa molestias eos qui rem cupiditate maxime sint voluptatem facere nobis perspiciatis doloribus eveniet nesciunt quos dicta veritatis? Dolores eius esse perferendis, voluptatem in labore, inventore molestias tempore illum enim itaque aperiam commodi nostrum! Voluptatum, voluptas atque corporis veritatis amet optio deleniti officia dignissimos expedita harum esse excepturi ipsum dolorem laudantium assumenda aliquid, quibusdam corrupti nulla eius enim omnis temporibus? Pariatur culpa nesciunt sint, officiis qui perspiciatis, architecto reprehenderit vero officia, ex libero neque temporibus ipsam in molestias unde? Harum quasi rerum mollitia maiores assumenda reiciendis sapiente vel iste et dicta natus consectetur quis nostrum quisquam consequatur porro, debitis cupiditate odit voluptates hic provident at. Ad quo nulla vero laudantium iure eaque quaerat quod dolorem aspernatur neque, numquam dolorum modi quas ducimus porro esse enim repellat eum. Mollitia obcaecati veniam reiciendis magnam eaque quis suscipit facere excepturi at, veritatis porro consequuntur enim. Accusantium quidem veritatis reprehenderit voluptatum saepe totam nihil a explicabo eaque numquam rem dolores corporis, earum, nisi quaerat vero perferendis suscipit, et molestias provident consectetur assumenda cupiditate. Deleniti eveniet culpa itaque consectetur exercitationem, blanditiis dolore voluptates dolor ducimus corporis ratione molestiae numquam odit atque voluptate esse, temporibus labore quas? Facere fugiat, impedit earum quisquam laudantium doloribus, placeat reprehenderit libero ducimus, ipsum amet. Ipsum maxime laudantium autem minima deleniti voluptatem sit, reprehenderit labore alias harum maiores quam dolorem vero aliquid suscipit ut a cum veritatis? Inventore delectus vitae dicta cupiditate asperiores vel molestiae eligendi. Libero iusto eaque neque incidunt accusamus illo, nobis, non quam cupiditate tempora velit eos. Molestiae earum magnam sapiente, quos nesciunt cum alias natus asperiores recusandae non. Dolore dolor, nulla laborum, nemo officia cumque magni cupiditate optio ipsum perferendis ad praesentium necessitatibus hic pariatur suscipit quasi voluptate! Doloremque tenetur nesciunt ullam saepe amet fugiat a esse deserunt commodi et reprehenderit ducimus obcaecati nulla incidunt corrupti est alias culpa, quo laborum! Officia mollitia recusandae hic nulla dolores ullam temporibus repudiandae ea culpa enim. Mollitia eos earum sunt eligendi quas iure sequi consequuntur magnam nam fuga ipsam ex architecto, magni perferendis nesciunt doloribus in! In non voluptates corporis error. Obcaecati cumque sint fugiat dolor optio unde delectus eaque eius, repellendus voluptate deleniti dolorum quam reprehenderit quas ullam quisquam corporis. Pariatur et ducimus modi consequatur dolor, accusamus veniam suscipit ut, deserunt corrupti facere facilis quisquam aliquid tempore mollitia eius laudantium necessitatibus reprehenderit impedit consectetur esse debitis atque autem? Ducimus laudantium eligendi magnam cumque obcaecati!</p>
    </div>
  )
}

export default Home
