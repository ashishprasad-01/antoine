import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import mini from './miniCart.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCart } from '../../store/actions/cartActions'
import { deleteCartItem } from '../../store/actions/cartActions'
import { toast } from 'react-hot-toast'

export default function MiniCart() {
  const { cartItem } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const notify = () => toast.success('Successfully Deleted');

  useEffect(() => {
    dispatch(getCart())
  }, [dispatch])

  return (
    <>
      <div className={mini.miniCartWrapper}>
        <div className={mini.miniCartTop}>
          <div className={mini.miniCartTopTotal}>
            <p><span>{cartItem.length}</span> Items In Cart</p>
            <p>Cart SubTotal:<br /><span>LBP 100000</span></p>
          </div>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 15 20">
              <path id="Path_1818" data-name="Path 1818" d="M78.583,7.5h-1.25V5.833a5.833,5.833,0,0,0-11.667,0V7.5h-1.25A.416.416,0,0,0,64,7.917V18.333A1.668,1.668,0,0,0,65.667,20H77.333A1.668,1.668,0,0,0,79,18.333V7.917A.416.416,0,0,0,78.583,7.5Zm-5.836,8.7a.417.417,0,0,1-.414.463H70.667a.417.417,0,0,1-.414-.463l.263-2.364a1.648,1.648,0,0,1-.682-1.34,1.667,1.667,0,0,1,3.333,0,1.648,1.648,0,0,1-.682,1.34Zm2.086-8.7H68.167V5.833a3.333,3.333,0,0,1,6.667,0Z" transform="translate(-64)" fill="#fff" />
            </svg> Proceed To Checkout
          </button>
        </div>
        <div className={mini.miniCartMiddle}>
          {
            cartItem.length > 0 && cartItem.map((item) => {
              return (
                <>
                  <div className={mini.miniCartMiddleCard} key={item.id}>
                    <img src={item.img} alt={item.title} />

                    <div className={mini.miniCartMiddleDesc}>
                      <span>{item.title}</span>
                      <span>{item.author}</span>
                      <span>LBP {item.price}</span>
                      <div className={mini.miniCartQty}>
                        <div className={mini.miniCartQtyButton}>
                          <button >-</button>{item.qty}<button>+</button>
                        </div>
                        <div className={mini.miniCartSvg}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
                            <g id="pencil" transform="translate(-1.25 -1.25)">
                              <path id="Line_46" data-name="Line 46" d="M2.564,3.087a.522.522,0,0,1-.37-.153L-.6.143A.523.523,0,0,1-.6-.6a.523.523,0,0,1,.74,0L2.934,2.194a.523.523,0,0,1-.37.893Z" transform="translate(13.163 2)" fill="#72797e" />
                              <path id="Path_6018" data-name="Path 6018" d="M1.773,17.157a.523.523,0,0,1-.5-.661l1.047-3.837a.523.523,0,0,1,.135-.232L10.473,4.4a.523.523,0,0,1,.74,0L14,7.194a.523.523,0,0,1,0,.74L5.98,15.957a.523.523,0,0,1-.232.135L1.911,17.139A.523.523,0,0,1,1.773,17.157Zm1.515-4.089-.769,2.82,2.82-.769,7.555-7.555L10.843,5.513Z" transform="translate(0 -0.907)" fill="#72797e" />
                            </g>
                          </svg>

                          <svg  onClick={()=> {dispatch(deleteCartItem(item.id)); notify()}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15">
                            <g id="trash-2" transform="translate(-29 4.998)">
                              <path id="Union_10" data-name="Union 10" d="M3.407,15a1.95,1.95,0,0,1-1.972-1.92V3.84H.541a.543.543,0,0,1-.381-.154A.507.507,0,0,1,0,3.314a.532.532,0,0,1,.539-.521H3.588V1.92A1.952,1.952,0,0,1,5.563,0H8.437a1.949,1.949,0,0,1,1.972,1.92v.873h3.053A.533.533,0,0,1,14,3.314V3.32a.53.53,0,0,1-.539.52h-.9v9.24A1.95,1.95,0,0,1,10.588,15Zm-.892-1.92a.884.884,0,0,0,.892.875h7.181a.888.888,0,0,0,.9-.875V3.84H9.872a.583.583,0,0,1-.06,0H4.186c-.021,0-.039,0-.06,0H2.514ZM9.333,2.793V1.92a.885.885,0,0,0-.9-.871H5.563a.889.889,0,0,0-.9.871v.873ZM7.9,10.988V6.8a.538.538,0,0,1,1.075,0v4.184a.538.538,0,0,1-1.075,0Zm-2.872,0V6.8A.539.539,0,0,1,6.1,6.8v4.184a.539.539,0,0,1-1.077,0Z" transform="translate(29 -4.998)" fill="#72797e" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
        <div className={mini.miniCartBottom}>
          <Link to='/cart'>View and Edit Cart</Link>
        </div>
      </div>

    </>
  )
}
