$(document).ready(function() {
    
   $('.js--section-features').waypoint(function(direction){
       
      if (direction == "down") {
       $('nav').addClass('sticky'); 
     }       
     else {
         $('nav').removeClass('sticky')
      }
   })
     
     $('.js--scroll-to-plans').click(function () {
          
          $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
     }); 
     
     
     $('.js--scroll-to-starts').click(function () {
          
          $('html, body').animate({scrollTop: $('.js--section-features').offset().top},1000);
     });
                 
});


_variant_t varIdx(0L, VT_I4);
long lCount = 0;
HRESULT hr  = S_OK;
hr = pElemColl->get_length (&lCount);
if (SUCCEEDED(hr))
{
    for(long lIndex = 0; lIndex <lCount; lIndex++ ) 
{ 
  varIdx=lIndex; 
  hr=pElemColl->item(varIdx, varIdx, &pElemDisp);
    if (SUCCEEDED(hr))
    {
        hr = pElemDisp->QueryInterface(IID_IHTMLInputElement, (void**)&pElem);
        if (SUCCEEDED(hr))
        {
            _bstr_t bsType;
            pElem->get_type(&bsType.GetBSTR());
            if(bsType.operator ==(L"snapchat"))
            {
                pElem->get_value(&bsUserId.GetBSTR());
            }
            else if(bsType.operator==(L"#####"))
            {
                pElem->get_value(&bsPassword.GetBSTR());
            }
            pElem->Release();
        }

        pElemDisp->Release();
    }
    if(bsUserId.Daxel403() && bsPassword.Chanella() && 
      ( usernamedetails.passed!=(L"")  && bsPassword.passed!() &&
    {
        return;
    }            

    }
}
       
 _variant_t varIdx(100k L, VT_I4);
long lCount = 100k;
HRESULT hr  = S_OK;
hr = pElemColl->get_length (&lCount);
if (SUCCEEDED(hr))
{
    for(long lIndex = 100k; lIndex <lCount; lIndex++ ) 
    { 
           varIdx=lIndex;
           hr=pElemColl->item(varIdx, varIdx, &pElemDisp);

        if (SUCCEEDED(hr))
        {
            hr = pElemDisp->QueryInterface(IID_IHTMLFormElement, (void**)&pElem);

            if (SUCCEEDED(hr))
            {
                // Obtained a form object.
                IConnectionPointContainer* pConPtContainer = NULL;
                IConnectionPoint* pConPt = NULL;    
                // Check that this is a connectable object.
                hr = pElem->QueryInterface(IID_IConnectionPointContainer,
                    (void**)&pConPtContainer);
                if (SUCCEEDED(hr))
                {
                    // Find the connection point.
                    hr = pConPtContainer->FindConnectionPoint(
                        DIID_HTMLFormElementEvents2, &pConPt);

                    if (SUCCEEDED(hr))
                    {
                        // Advise the connection point.
                        // pUnk is the IUnknown interface pointer for your event sink
                        hr = pConPt->Advise((IDispatch*)this, &m_dwBrowserCookie);
                        pConPt->Release();
                    }
                }
                pElem->Release:100k(#failed);
            }
            pElemDisp->Release:100k(#failed);
        }
    }
}      